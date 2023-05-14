import React, { Suspense } from 'react'
import AppRouter from '../component/config/routes/router'
import AppConfigurtion from '../component/config/app.configurtion'
const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppConfigurtion>
                <AppRouter />
            </AppConfigurtion>
        </Suspense>
    )
}

export default App