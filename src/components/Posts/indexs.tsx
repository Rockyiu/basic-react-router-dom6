import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './syle.css';

export const Posts = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();
    console.log(id);
    return(
        <div>
            <h1>Post {`Paramentro:${id}`} {`QS: ${qs}`}</h1>
            <Outlet />
        </div>
    );
}