export const Game = ({ gameId }) => {
    const siteVersion = useSelector(selectSiteVersion) // mobile // desktop

    const [isLoading, setIsLoading] = useState(false)
    const [isFullScrean, setIsFullScrean] = useState(false)
    const [game, setGame] = useState({ title: '', description: '' })



    const api_params = {
        id: gameId,
        mode: 'real',
        platform: siteVersion
    }

    const loadGame = async () => {
        try {
            setIsLoading(true)

            const game = await requestGame(api_params)



            setGame(game)

        } catch (error) {

        }

        setIsLoading(false)

    }

    if (siteVersion === 'mobile') {
        useEffect(async () => {
            await loadGame()
        })
    }

    useEffect(() => {
        document.addEventListener('fullscreanchange', () => {
            setIsFullScrean(!isFullScrean)
        })

    })

    if (!gameId) {
        return <> empty </>
    }

    return (
        <>
            <>{game.title}</>
            <>{game.description}</>
            {isLoading && <>Loading</>}
        </>
    )

}