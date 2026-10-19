import { useNavigate } from "react-router-dom"

const Nav = ({page, redirect}) => {
    const navigate = useNavigate();
    return (
        <>
            <button
                onClick={() => navigate(redirect)} 
            >
                {page}
            </button>
        </>
    )
}

export default Nav
