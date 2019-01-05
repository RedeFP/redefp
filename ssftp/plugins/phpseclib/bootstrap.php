<<<<<<< HEAD
<?php
/**
 * Bootstrapping File for phpseclib
 *
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 */

if (extension_loaded('mbstring')) {
    // 2 - MB_OVERLOAD_STRING
    if (ini_get('mbstring.func_overload') & 2) {
        throw new \UnexpectedValueException(
            'Overloading of string functions using mbstring.func_overload ' .
            'is not supported by phpseclib.'
        );
    }
}
=======
<?php
/**
 * Bootstrapping File for phpseclib
 *
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 */

if (extension_loaded('mbstring')) {
    // 2 - MB_OVERLOAD_STRING
    if (ini_get('mbstring.func_overload') & 2) {
        throw new \UnexpectedValueException(
            'Overloading of string functions using mbstring.func_overload ' .
            'is not supported by phpseclib.'
        );
    }
}
>>>>>>> 6c5a0eae472b47947e37c523b6389aff713b93b4
