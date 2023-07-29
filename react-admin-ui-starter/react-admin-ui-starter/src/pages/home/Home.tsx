
import './home.scss'
import TopBox from "../../components/topBox/TopBox";
import ChartBox from '../../components/chartBox/ChartBox';
const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2"><ChartBox /></div>
            <div className="box box3"><ChartBox /></div>
            <div className="box box4">Box 4</div>
            <div className="box box5"><ChartBox /></div>
            <div className="box box6"><ChartBox /></div>
            <div className="box box7">Box 7</div>
            <div className="box box8">Box 8</div>
            <div className="box box9">Box 9</div>
            {/* <div className="box box1">Box 10</div>
            <div className="box box1">Box 11</div>
            <div className="box box1">Box 12</div>
            <div className="box box1">Box 13</div> */}
        </div>
    )
}

export default Home