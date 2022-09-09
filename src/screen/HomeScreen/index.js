import HomeComponent from "../../components/HomeComponent";
import { AuthProvider } from '../../auth/index'

const HomeScreen = () => {
    return (
        <AuthProvider>
            <HomeComponent />
        </AuthProvider>
    )
}

export default HomeScreen