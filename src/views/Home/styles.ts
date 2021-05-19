import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    img {
        width: 30%;
        padding: 10px 0;
    }

    @media (max-width: 600px) {
        flex-direction: column;

        img {
            width: 40%;
            margin-top: 20px;
        }
    }
`;
