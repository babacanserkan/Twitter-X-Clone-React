import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
    return (
        <aside className="w-[275px] min-h-dvh">
            <Logo />
            <Menu />
        </aside>
    );
};

export default Sidebar;
