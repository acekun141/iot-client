import { Box, Heading, Grid, GridItem, Text, Switch } from "@chakra-ui/react";
import BaseLayout from "../../container/BaseLayout";
import { BiWind, BiTv } from "react-icons/bi"
import DeviceSwitcher from "../../container/DeviceSwitcher";

const DashboardPage = () => {
  return (
    <BaseLayout>
      <Box>
        <Heading as="h4" size="md" mb="2">Devices</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <DeviceSwitcher icon={BiWind} deviceName="Air Conditioner" deviceStatus="25°C Temperature" />
          <DeviceSwitcher icon={BiTv} deviceName="TV" deviceStatus="37% Volume" />
        </Grid>
        </Box>
      </BaseLayout>
    );
  }

export default DashboardPage;