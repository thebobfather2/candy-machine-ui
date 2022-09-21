import styled from "styled-components";

const Container = styled("div")`
    width 100vw;
    height: auto;
    background: linear-gradient(180deg, #FF8410 0%, #924700 100%);

    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items:center;

    position: relative;
`

const Title = styled("h1")`
    font-size: 4rem;
    margin: 0;
    white-space: nowrap;
    font-family: 'Lobster', cursive;
    color: #000000
`

const Link = styled("a")`
    font-size: 1.5rem;
    margin:0rem;
    cursor: pointer;
    color: #000000;
    text-decoration: none;

    position: absolute;
    right: 5%;

    @media (max-width: 700px) {
        position: absolute;
    } 

`

const Navbar = () => {
    return (
        <Container>
            <Title style={{marginTop: "0px", marginLeft: "20px", marginBottom: "20px"}}>
                Edd Fox
            </Title>
            <Title style={{fontSize: "0.6em", marginTop: "58px", marginLeft: "-155px", color: "white"}}>
                from the creators of bobby rabbits
            </Title>
            <Link href="https://www.bobbyrabbits.com/#/EddFox">
                About
            </Link>
        
        </Container>
    )
}

export default Navbar;