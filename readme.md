const handleFetchPalettes = useCallback(async () => {
const response = await fetch(
'https://color-palette-api.kadikraman.vercel.app/palettes',
);
if (response.ok) {
const palettes = await response.json();
setColor(palettes);
}
}, []);
useEffect(() => {
handleFetchPalettes();
}, []);
