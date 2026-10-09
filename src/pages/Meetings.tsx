export const Meetings = () => {
    return (
        <div className="w-full p-10">
            <iframe
                src="https://calendar.google.com/calendar/embed?src=hyperspecagh%40gmail.com&ctz=Europe%2FWarsaw"
                className="border-0 max-w-full max-h-full aspect-video m-auto bg-white rounded-2xl"
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
            ></iframe>
        </div>
    );
};
