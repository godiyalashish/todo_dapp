import { useSelector } from "react-redux";

const Header = () => {
    const address = useSelector(store=>store.wallet.wallet[0].add);
    return (
        <div className="bg-[#3772FF] text-xl text-white text-center h-10">{address}</div>
    )
}

export default Header;