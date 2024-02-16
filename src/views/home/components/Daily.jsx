import {  Box, Card, CardHeader, Flex, Stat, StatLabel} from "@chakra-ui/react"
import { faChartSimple} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnChart from "../../../components/charts/BarChart copy";
import { barChartDataDailyTraffic111, barChartOptionsDailyTraffic111 } from "../../../components/variables/charts copy";

const Daily = () => {
    return (
        <>
            <Card >
                <CardHeader>
                    <Stat>
                        <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'}>
                            <StatLabel color={'brand.200'}>Daily traffic</StatLabel>
                            <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                        </Flex>
                    </Stat>
                </CardHeader>
                
                    <ColumnChart  chartData={barChartDataDailyTraffic111} chartPptions={barChartOptionsDailyTraffic111}/>
                
            </Card>
            
        </>
    )
}


export default Daily