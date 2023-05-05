import PlayerAuthenticateView from '../../../../view/player-view/authenticate/player-authenticate-view'
import PlayerInitializeView from '../../../../view/player-view/initialize/player-initialize-view'
import PlayerSignupView from '../../../../view/player-view/signup/player-signup-view'
const PlayerRoute = [
    {
        path: "/authenticate",
        element: <PlayerAuthenticateView />,
        exact: true,
    },
    {
        path: "/initialize",
        element: <PlayerInitializeView />,
        exact: true,
    },
    {
        path: "/",
        element: <PlayerSignupView />,
        exact: true,
    },
];

export default PlayerRoute;
