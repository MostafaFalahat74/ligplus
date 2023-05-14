import React from 'react'
import {BaseStylesConfigCustomize} from './base-styles.config.customize'
import {BaseStylesConfigReset} from './base-styles.config.rest'
import { Global } from '@emotion/react';

const BaseStylesConfig = () => {
    return (
        <>
           <Global styles={BaseStylesConfigCustomize} />
           <Global styles={BaseStylesConfigReset} />
        </>
    )
}

export default BaseStylesConfig