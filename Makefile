# directories
SDIR=src
TDIR=pytests
# compilers
TSC=./node_modules/typescript/bin/tsc
TSCFLAGS=-t ES3 --sourceMap --module commonjs
PYTHON=python2.7
PYC=$(PYTHON) -m compileall
BROWSERIFY=./node_modules/browserify/bin/cmd.js
# Source files:
TSSOURCES=$(wildcard $(SDIR)/*.ts) $(wildcard lib/*.ts)
# Test files:
PYSOURCES=$(wildcard $(TDIR)/*.py) $(wildcard $(TDIR)/**/*.py)
PYCS=$(PYSOURCES:.py=.pyc)
TESTOUTS=$(PYSOURCES:.py=.out)
# Main library output file:
MAININ=browser/demo-raw.js
MAINOUT=browser/demo.js
# Test application file:
TEST=test.ts
TESTJS=test.js
# Console application file:
RUNNER=runner.ts
RUNNERJS=runner.js
# Generated JS files (used for cleanup)
GENJS=$(TSSOURCES:.ts=.js) $(TESTJS) $(RUNNERJS)
# TSLINT
TSLINT=./node_modules/tslint/bin/tslint

.PHONY: main test coverage compile lint clean
main: compile $(RUNNERJS)
	$(BROWSERIFY) $(MAININ) > $(MAINOUT)

test: compile $(TESTJS) $(PYCS) $(TESTOUTS) $(RUNNERJS)
	node $(TESTJS)

coverage: compile $(TESTJS) $(PYCS) $(TESTOUTS) $(RUNNERJS)
	istanbul cover $(TESTJS)

compile: $(TSSOURCES) $(TSC) bower_components
	$(TSC) $(TSCFLAGS) $(TSSOURCES)

$(TSC):
	npm install .

bower_components:
	bower install

lint:
	$(TSLINT) $(foreach source,$(TSSOURCES), -f $(source))

%.js: %.ts
	$(TSC) $(TSCFLAGS) $^

%.pyc: %.py
	$(PYC) $^

%.out: %.pyc
	$(PYTHON) $^ > $@ 2>&1

clean:
	$(RM) $(GENJS) $(PYCS) $(MAINOUT) $(TESTOUTS)
