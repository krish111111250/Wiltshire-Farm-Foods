import React from 'react';
import '../styles/Desserts.css';

const Desserts = () => {
    const items = [
        {
            id: 1,
            title: "Hot Desserts",
            description: "Warming crumbles, sponges, and puddings. Perfect with custard.",
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "View Hot Desserts"
        },
        {
            id: 2,
            title: "Cold Desserts",
            description: "Refreshing mousses, trifles, and cheesecakes.",
            image: "https://images.unsplash.com/photo-1488477181946-6428a029177b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "View Cold Desserts"
        },
        {
            id: 3,
            title: "Cakes & Gateaux",
            description: "A slice of luxury. Chocolate gateau, carrot cake, and more.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "View Cakes"
        },
        {
            id: 4,
            title: "Reduced Sugar",
            description: "Delicious desserts with reduced sugar, suitable for diabetics.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytWPjr5bTk1LX0gTdCQwkIeuuLlJvKt1qaQ&s",
            link: "View Reduced Sugar"
        }
    ];

    return (
        <div className="desserts-page">

            {/* Header */}
            <div className="desserts-header">
                <h1>Desserts</h1>
                <p>Indulgent hot and cold desserts for every occasion.</p>
            </div>

            {/* Grid Section */}
            <div className="desserts-container">
                <div className="desserts-grid">
                    {items.map((item) => (
                        <div key={item.id} className="food-card">
                            <div className="image-wrapper">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <button className="shop-btn">{item.link}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Desserts;
