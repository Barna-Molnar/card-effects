import React from 'react'
import styled from 'styled-components'

const SoftShadowStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #ac53ec;
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            color: rgba(0,0,0,0.55);
            box-shadow: inset 5px 5px 15px rgba(0,0,0,0.15),
        inset -5px -5px 15px rgba(255,255,255,0.15), 
        5px 5px 15px rgba(0,0,0,0.15),
         -5px -5px 15px rgba(255,255,255,0.15);
        }
        position: relative;
        width: 300px;
        height: 400px;
        background: #ac53ec;
        border-radius: 40px;
        box-shadow: inset 5px 5px 15px rgba(0,0,0,0.15),
        inset -5px -5px 15px rgba(255,255,255,0.15), 
        5px 5px 15px rgba(0,0,0,0.15),
         -5px -5px 15px rgba(255,255,255,0.15);
         &:before {
            content: '';
            position: absolute;
            inset: 5px;
            background : rgba(255,255,255,0.1);
            backdrop-filter: blur(5px);
            border-radius: 35px;
            transition: all 0.5s;
         };
         &:hover::before {
             transform: translate(300px);
             box-shadow: 30px 30px 50px rgba(0,0,0,0.25);
         }
    };

`

const SoftCardShadow = () => {
    return (
        <SoftShadowStyles>

            <div className="card">
                <h1>Barnabas Molnar </h1>

            </div>
        </SoftShadowStyles>
    )
}

export default SoftCardShadow
