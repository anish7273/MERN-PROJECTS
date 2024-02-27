import VideoCard from "./VideoCard"


const Videos = [
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },

    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    }, {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },

    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },{
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    }, {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },

    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    },
    {
        image: "/ph1.jpg",
        thumb: "/ph2.jpg",
        title: `The Dark Truth of SIP Investment | Mutual Funds | Share Market`,
        author: `NSE INDIA`,
        views: `123.5Mn`,
        time: `12 days ago`
    }]

export function VideoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Videos.map((video)=>(
                <div>
                    <VideoCard
                    image={video.image}
                    thumb={video.thumb}
                    title={video.title}
                    author={video.author}
                    views={video.views}
                    time={video.time}
                    />
                </div>
            ))}


        </div>
    )
}