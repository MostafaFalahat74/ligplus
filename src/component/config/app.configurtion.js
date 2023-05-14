import React from 'react';
import BaseStylesConfig from '../../component/config/base-styles/base-styles.config'

const AppConfigurtion = ({ children }) => {
    return (
        <>
        <BaseStylesConfig />
            {children}
        </>
    )
}

export default AppConfigurtion