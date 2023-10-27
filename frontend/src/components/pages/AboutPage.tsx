import {Link} from "react-router-dom";
import {baseRouters, IRoute, RoutesNames} from "../routers/Routers";

export const AboutPage = () => {
    const home: IRoute | undefined = baseRouters.get(RoutesNames.HOME);
    const delivery: IRoute | undefined = baseRouters.get(RoutesNames.DELIVERY);

    return (
        <>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-body-emphasis">Fast delivery worldwide</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Welcome to WebDelivery - Your Global Delivery Solution

                        At WebDelivery, we've redefined the way the world sends and receives packages. Our mission is simple: to connect you with a vast network of reliable delivery partners, making it easier than ever to send and receive goods, documents, and parcels anywhere in the world.

                        Who We Are:
                        WebDelivery is a trusted and innovative global delivery platform, connecting businesses and individuals with a worldwide network of couriers, carriers, and logistics experts. With a commitment to efficiency, affordability, and security, we're dedicated to streamlining the process of getting your shipments where they need to be.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        {/*<Link*/}
                        {/*    to={home ? home.path : '/'}*/}
                        {/*    type="button"*/}
                        {/*    className="btn btn-primary btn-lg px-4 me-sm-3">Go {home ? home.name : 'Home'}</Link>*/}
                        <Link
                            to={delivery ? delivery.path : '/'}
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4">
                            More about {delivery?.name.toLocaleLowerCase()}</Link>
                    </div>
                </div>
                <div className="overflow-hidden" style={{maxHeight: "100vh"}}>
                    <div className="container px-5 " style={{}}>
                        {/*<img src="https://cdn.fishki.net/upload/post/201409/05/1301415/02.jpg"*/}
                        <img src="https://thumbs.dreamstime.com/z/young-joyful-delivery-man-red-cap-jacket-happily-looking-camera-giving-package-to-customer-over-white-background-182622559.jpg?w=2048"
                             className="img-fluid border rounded-3 shadow-lg mb-4"
                             alt="" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
        </>
    );
};