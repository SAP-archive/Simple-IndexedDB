
/**
 * Storage Util Exception.
 * This is an exception object that is being returned at each reject of StorageUtil.
 * @returns {Object} {errorCode : errorCode, errorMessage : errorMessage, errorObject : e}
 */
    function StorageUtilException(errorCode, errorMessage, e){
        return {errorCode : errorCode, errorMessage : errorMessage, errorObject : e};
    }







