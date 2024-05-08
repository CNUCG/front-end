import fb from "../assets/facebook.svg"
import yt from "../assets/youtube.svg"
import insta from "../assets/instagram.svg"
import styled from "styled-components"

const Footer = styled.footer`
    font-size: .7em;
    background-color: #d6d6d6;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    user-select: none;

    > div {
        border: 1px solid red;
    }


    a {
        color: rgb(0, 0, 0);
        text-decoration: none;
    }

    .redes-sociais {
        display: flex;
        gap: .5em;

        img {
            width: 2em;
        }
    }

    .outros { 
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
    }
`

export default function () {
    return <>
        <Footer>
            <div className="informacoes">
                <a href="https://www.camboriu.ifc.edu.br/">Instituto Federal de Educação, Ciência e Tecnologia Catarinense - Campus Camboriú</a>
                <div className="endereço">Rua: Joaquim Garcia, s/c - CEP 88340-055 - Camboriú - SC / Fone: (47) 2104-0800</div>
            </div>
            
            <div className="outros">
                <div className="termos"><a href="#">Termos de uso</a></div>  
                <div className="privacidade"><a href="#">Política de privacidade</a></div>
            </div>
            
            <div className="redes-sociais">
                <a href="https://www.instagram.com/ifc.oficial.camboriu/">
                    <img src={insta} alt="" /></a>
                <a href="https://www.youtube.com/ifcoficialcamboriu">
                    <img src={yt} alt="" /></a>
                <a href="https://www.facebook.com/ifccamboriu.oficial/?locale=lv_LV&_rdr">
                <img src={fb} alt="" /></a>
            </div>
        </Footer>
    </>
}