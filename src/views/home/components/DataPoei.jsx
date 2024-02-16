import { Box, Card, CardBody, CardHeader, Flex, Stat, StatLabel } from "@chakra-ui/react"
import { faChartSimple} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PieChart from "../../../components/charts/PieChart copy";
import { pieChartData2, pieChartOptions2 } from "../../../components/variables/charts copy";

const DataPoei = () => {
    return (
        <>
            <Card >
                <CardHeader >
                    <Stat>
                        <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'}>
                            <StatLabel color={'brand.200'}>PieChart</StatLabel>
                            <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                        </Flex>
                    </Stat>
                </CardHeader>

                <CardBody>
                    <PieChart chartData={pieChartData2} chartPptions={pieChartOptions2}></PieChart>
                </CardBody>
            </Card>
        </>
    )
}

export default DataPoei