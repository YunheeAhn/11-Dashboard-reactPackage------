import { Box, Card, CardHeader, Flex, Stat, StatLabel, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { complexDataTable } from "../../../components/variables/tables"

const ComplexTable = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Stat>
                        <Flex display={'flex'}  alignItems={'center'} justifyContent={'space-between'} borderRadius={'50%'} >
                            <StatLabel color={'brand.200'}>Complex Table</StatLabel>
                            <Box>
                                <FontAwesomeIcon icon={faChartSimple} color='#422AFB' />
                            </Box>
                        </Flex>
                    </Stat>
                </CardHeader>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>NAME</Th>
                                <Th>STATUS</Th>
                                <Th>DATE</Th>
                                <Th>PROGRESS</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {complexDataTable.map((row, index) => (
                                <Tr key={index}>
                                    <Td>{row.name}</Td>
                                    <Td>{row.status}</Td>
                                    <Td>{row.date}</Td>
                                    <Td>{row.progress}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}

export default ComplexTable