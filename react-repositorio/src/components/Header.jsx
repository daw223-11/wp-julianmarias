import { Avatar, Menu, MenuItem, MenuButton, MenuList, MenuDivider, MenuGroup } from "@chakra-ui/react"
import '../App.css'
import { useAuthContext } from "../context/AuthContext";
export function Header() {

    const { logout, user } = useAuthContext();

    return (
        <div className="header">
            <div> CLASE LOGO </div>
            <Menu>
                <MenuButton>
                    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                </MenuButton>
                <MenuList>
                    <MenuGroup title='Cuenta'>
                        <MenuItem>Mi cuenta</MenuItem>
                        <MenuItem onClick={() => logout(user)}>Cerrar sesión</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Soporte'>
                        <MenuItem>Documentación</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Contacto</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    )
}