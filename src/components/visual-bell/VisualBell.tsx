import * as React from "react";
import styled, { css, keyframes, StyledComponent } from "styled-components";
import { border_radius_med, figma_black_1, figma_hud, figma_red, figma_white, shadow_hud } from "../../variables";
import { fontUIPos } from "../../mixins";

const Root: StyledComponent<"div", any, { isError: boolean }> = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    flex-shrink: 1;
    height: 36px;
    padding: 0 16px 0 16px;

    transition: all 0.3s ease-out;

    border: 1px solid ${figma_black_1};
    border-radius: ${border_radius_med};
    background-color: ${figma_hud};
    box-shadow: ${shadow_hud};

    ${(props: any) =>
        props.isError &&
        css`
            border: 1px solid ${figma_red};
            background-color: ${figma_red};
        `};
`;

const Msg = styled.span`
    ${fontUIPos("xlarge", "normal")};

    display: block;

    color: ${figma_white};
`;

const SpinnerContainer = styled.div`
    overflow: hidden;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-left: -4px;
`;

const rotating = keyframes`
    from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
    display: block;
    width: 24px;
    height: 24px;

    animation: ${rotating} 1s linear infinite;

    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M4.848%209.74l.477.15-.477-.15zm2.622-3.08a.5.5%200%200%200-.617-.787l.617.787zm10.677%201.99a7%207%200%200%201%20.838%203.803l.998.065a8%208%200%200%200-.958-4.346l-.878.478zm.838%203.803a7%207%200%200%201-1.324%203.662l.81.588a8%208%200%200%200%201.513-4.186l-.998-.065zm-1.324%203.662a7%207%200%200%201-3.076%202.388l.37.93a8%208%200%200%200%203.515-2.729l-.81-.588zm-3.076%202.388a7%207%200%200%201-3.876.375l-.184.983a8%208%200%200%200%204.43-.428l-.37-.93zm-3.876.375a7%207%200%200%201-3.477-1.755l-.68.732a8%208%200%200%200%203.973%202.005l.184-.983zm-3.477-1.755a7%207%200%200%201-2.001-3.341l-.967.255a8%208%200%200%200%202.287%203.818l.68-.732zm-2-3.34a7%207%200%200%201%20.094-3.893l-.954-.3a8%208%200%200%200-.107%204.449l.967-.255zm.094-3.893c.323-1.024.863-1.835%201.326-2.394.23-.278.44-.49.6-.632l.175-.157.044-.037c.01-.008.01-.008-.298-.402l-.31-.393-.026.02-.06.05-.21.2c-.175.165-.413.407-.674.722-.52.627-1.137%201.55-1.5%202.73l.954.3z%22%20fill%3D%22%23a5a5a5%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: none;
`;

export const VisualBellComponents = {
    Root,
    Msg,
    SpinnerContainer,
    Spinner
};

export const VisualBell = (props: { isLoading?: boolean; isError?: boolean; text: React.ReactNode }) => {
    const { isLoading, isError, text, ...otherProps } = props;
    return (
        <Root isError={isError || false} {...otherProps}>
            {isLoading && (
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            )}
            <Msg>{text}</Msg>
        </Root>
    );
};
