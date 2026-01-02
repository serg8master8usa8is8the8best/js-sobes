export const Game = ({ gameId }) => {


    if (!gameId) {
        return <> empty </>
    }

    const siteVersion = useSelector(selectSiteVersion) // mobile // desktop

    const [isLoading, setIsLoading] = useState(true)
    const [isFullScrean, setIsFullScrean] = useState(false)
    const [isError, setIsError] = useState(null)
    const [game, setGame] = useState({ title: '', description: '' })

    const loadGame = useCallback(async () => {

        try {
            setIsLoading(true)
            const game = await requestGame({
                id: gameId,
                mode: 'real',
                platform: siteVersion
            })
            setGame(game)
        } catch (error) {
            setIsError(error)
        }

        setIsLoading(false)
    }, [gameId, siteVersion])

    useEffect(async () => {
        await loadGame()
    }, gameId)

    useEffect(() => {

        const fullScreanChangeHandler = () => {
            setIsFullScrean(!isFullScrean)
        }

        document.addEventListener('fullscreanchange', fullScreanChangeHandler)

        return () => {
            document.removeEventListener('fullscreanchange', fullScreanChangeHandler)
        }

    }, [])



    return isError ? isError : (
        <>
            {!isLoading ?
                <>
                    <>{game.title}</>
                    <>{game.description}</>
                </> : <>Loading</>}
        </>
    )

}