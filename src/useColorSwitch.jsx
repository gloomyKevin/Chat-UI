function useColorSwitch() {
    const [color, setColor] = useState("#ff0000");

    const handleClick = () => {
        alert("1");
        setColor("##00ff00")
    }

    return [color, handleClick]
}

export default useColorSwitch


