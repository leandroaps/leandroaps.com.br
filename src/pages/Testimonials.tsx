import Title from '../atoms/Title';

function Testimonials() {
    return (
        <div className="s-testimonials">
            <div className="overlay"></div>

            <div className="row testimonials-header">
                <div className="col-full">
                    <Title level="h1" content="What People Say" className="h02" />
                </div>
            </div>

            <div className="row testimonials">
                <div className="col-full testimonials__slider">
                    <div className="testimonials__slide">
                        <img
                            src="../assets/images/avatars/user-01.jpg"
                            alt="Author image"
                            className="testimonials__avatar"
                        />
                        <p>
                            Qui ipsam temporibus quisquam velMaiores eos cumque distinctio nam accusantium ipsum.
                            Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium
                            quos qui praesentium corpori.
                        </p>
                        <div className="testimonials__author h06">
                            Tim Cook
                            <span>CEO, Apple</span>
                        </div>
                    </div>

                    <div className="testimonials__slide">
                        <img
                            src="assets/images/avatars/user-05.jpg"
                            alt="Author image"
                            className="testimonials__avatar"
                        />
                        <p>
                            Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas
                            animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime.
                            Qui ipsam temporibus quisquam vel.
                        </p>
                        <div className="testimonials__author h06">
                            Sundar Pichai
                            <span>CEO, Google</span>
                        </div>
                    </div>

                    <div className="testimonials__slide">
                        <img
                            src="../assets/images/avatars/user-03.jpg"
                            alt="Author image"
                            className="testimonials__avatar"
                        />
                        <p>
                            Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia
                            nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum
                            accusamus. Quasi voluptas eius distinctio.
                        </p>
                        <div className="testimonials__author h06">
                            Satya Nadella
                            <span>CEO, Microsoft</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
