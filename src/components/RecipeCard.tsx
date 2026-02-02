interface RecipeCardProps{
    name: string;
    category: string;
    location: string;
    instructions: string;
    img: string;
    youtube: string;
    source: string;
}

function RecipeCard({name, category, location, instructions, img, youtube,source}: RecipeCardProps){

    const youtubeId = youtube.split("v=")[1]; const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

    return(
        <article className='w-full max-w-sm bg-blue-200 flex flex-col items-center'>
            <img src={img} alt={`image of ${name}`} className='w-full'/>

            <article className='p-6'>
                <article className='flex flex-col gap-4'>
                    <h3 className='font-bold text-xl'>{name}</h3>
                    <p>Category: {category}</p>
                    <p>Location: {location}</p>
                    <p>Instructions: {instructions}</p>
                </article>
                <iframe src={embedUrl}  
                    title={`YouTube video for ${name}`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='w-full rounded-md mt-4'></iframe>
                <a href={source}>{`Link to ${name}`}</a>
            </article>
        </article>
    )
}

export default RecipeCard;