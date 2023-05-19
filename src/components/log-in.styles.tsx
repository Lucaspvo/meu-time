import { Card } from 'primereact/card';
import styles from 'styled-components';

export const LoginSection = styles.div`
height: 100%;
background-color: #F5F5F5;
`;

export const CardWrapper = styles.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: calc(100% - 50px);
`;

export const CardView = styles(Card)`
width: 350px;
margin-top: 20px
margin-bottom: 30px
`;

export const FooterWrapper = styles.div`
display: inline-block;
text-align: center;
width: 100%;
height: 50px;
font-size: 13px;
`;

export const A = styles.a`
color: #0077cc;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
    color: #005fa3;
    border-color: #005fa3;
}
`;