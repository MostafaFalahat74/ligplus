import { LoadingBarSegment } from './loadingBar.segment.style';
import { CircularProgress } from "@mui/material";

export const LoadingBar = () => {
    return <LoadingBarSegment.LoadingBarContainer>
        <LoadingBarSegment.LoadingBarBody>
            <CircularProgress />
        </LoadingBarSegment.LoadingBarBody>
    </LoadingBarSegment.LoadingBarContainer>
};