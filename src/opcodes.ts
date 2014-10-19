enum Opcodes {
    STOP_CODE            = 0,
    POP_TOP              = 1,
    ROT_TWO              = 2,
    ROT_THREE            = 3,
    DUP_TOP              = 4,
    ROT_FOUR             = 5,
    // <6> = 6,
    // <7> = 7,
    // <8> = 8,
    NOP                  = 9,
    UNARY_POSITIVE       = 10,
    UNARY_NEGATIVE       = 11,
    UNARY_NOT            = 12,
    UNARY_CONVERT        = 13,
    // <14> = 14,
    UNARY_INVERT         = 15,
    // <16> = 16,
    // <17> = 17,
    // <18> = 18,
    BINARY_POWER         = 19,
    BINARY_MULTIPLY      = 20,
    BINARY_DIVIDE        = 21,
    BINARY_MODULO        = 22,
    BINARY_ADD           = 23,
    BINARY_SUBTRACT      = 24,
    BINARY_SUBSCR        = 25,
    BINARY_FLOOR_DIVIDE  = 26,
    BINARY_TRUE_DIVIDE   = 27,
    INPLACE_FLOOR_DIVIDE = 28,
    INPLACE_TRUE_DIVIDE  = 29,
    SLICE_0              = 30,
    SLICE_1              = 31,
    SLICE_2              = 32,
    SLICE_3              = 33,
    // <34> = 34,
    // <35> = 35,
    // <36> = 36,
    // <37> = 37,
    // <38> = 38,
    // <39> = 39,
    STORE_SLICE_0        = 40,
    STORE_SLICE_1        = 41,
    STORE_SLICE_2        = 42,
    STORE_SLICE_3        = 43,
    // <44> = 44,
    // <45> = 45,
    // <46> = 46,
    // <47> = 47,
    // <48> = 48,
    // <49> = 49,
    DELETE_SLICE_0       = 50,
    DELETE_SLICE_1       = 51,
    DELETE_SLICE_2       = 52,
    DELETE_SLICE_3       = 53,
    STORE_MAP            = 54,
    INPLACE_ADD          = 55,
    INPLACE_SUBTRACT     = 56,
    INPLACE_MULTIPLY     = 57,
    INPLACE_DIVIDE       = 58,
    INPLACE_MODULO       = 59,
    STORE_SUBSCR         = 60,
    DELETE_SUBSCR        = 61,
    BINARY_LSHIFT        = 62,
    BINARY_RSHIFT        = 63,
    BINARY_AND           = 64,
    BINARY_XOR           = 65,
    BINARY_OR            = 66,
    INPLACE_POWER        = 67,
    GET_ITER             = 68,
    // <69> = 69,
    PRINT_EXPR           = 70,
    PRINT_ITEM           = 71,
    PRINT_NEWLINE        = 72,
    PRINT_ITEM_TO        = 73,
    PRINT_NEWLINE_TO     = 74,
    INPLACE_LSHIFT       = 75,
    INPLACE_RSHIFT       = 76,
    INPLACE_AND          = 77,
    INPLACE_XOR          = 78,
    INPLACE_OR           = 79,
    BREAK_LOOP           = 80,
    WITH_CLEANUP         = 81,
    LOAD_LOCALS          = 82,
    RETURN_VALUE         = 83,
    IMPORT_STAR          = 84,
    EXEC_STMT            = 85,
    YIELD_VALUE          = 86,
    POP_BLOCK            = 87,
    END_FINALLY          = 88,
    BUILD_CLASS          = 89,
    STORE_NAME           = 90,
    DELETE_NAME          = 91,
    UNPACK_SEQUENCE      = 92,
    FOR_ITER             = 93,
    LIST_APPEND          = 94,
    STORE_ATTR           = 95,
    DELETE_ATTR          = 96,
    STORE_GLOBAL         = 97,
    DELETE_GLOBAL        = 98,
    DUP_TOPX             = 99,
    LOAD_CONST           = 100,
    LOAD_NAME            = 101,
    BUILD_TUPLE          = 102,
    BUILD_LIST           = 103,
    BUILD_SET            = 104,
    BUILD_MAP            = 105,
    LOAD_ATTR            = 106,
    COMPARE_OP           = 107,
    IMPORT_NAME          = 108,
    IMPORT_FROM          = 109,
    JUMP_FORWARD         = 110,
    JUMP_IF_FALSE_OR_POP = 111,
    JUMP_IF_TRUE_OR_POP  = 112,
    JUMP_ABSOLUTE        = 113,
    POP_JUMP_IF_FALSE    = 114,
    POP_JUMP_IF_TRUE     = 115,
    LOAD_GLOBAL          = 116,
    // <117> = 117,
    // <118> = 118,
    CONTINUE_LOOP        = 119,
    SETUP_LOOP           = 120,
    SETUP_EXCEPT         = 121,
    SETUP_FINALLY        = 122,
    // <123> = 123,
    LOAD_FAST            = 124,
    STORE_FAST           = 125,
    DELETE_FAST          = 126,
    // <127> = 127,
    // <128> = 128,
    // <129> = 129,
    RAISE_VARARGS        = 130,
    CALL_FUNCTION        = 131,
    MAKE_FUNCTION        = 132,
    BUILD_SLICE          = 133,
    MAKE_CLOSURE         = 134,
    LOAD_CLOSURE         = 135,
    LOAD_DEREF           = 136,
    STORE_DEREF          = 137,
    // <138> = 138,
    // <139> = 139,
    CALL_FUNCTION_VAR    = 140,
    CALL_FUNCTION_KW     = 141,
    CALL_FUNCTION_VAR_KW = 142,
    SETUP_WITH           = 143,
    // <144> = 144,
    EXTENDED_ARG         = 145,
    SET_ADD              = 146,
    MAP_ADD              = 147,
}
export = Opcodes;
