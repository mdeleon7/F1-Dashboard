import React, { createContext } from 'react';
import useDataFetchingService from './DataFetchingService';

export const DataFetchingContext = createContext();

export const DataFetchingProvider = ({ children }) => {
  const driverStandingsEndpoint = '/driverStandings.json';
  const constructorStandingsEndpoint = '/constructorStandings.json';
  const nextRaceEndpoint = '/next.json';
  const lastRaceEndpoint = '/last/results.json';
  const scheduleEndpoint = '.json'

  // Use the API layer to fetch data for driver standings and constructor standings
  const { data: driverStandingsData, isLoading: isLoadingDriverStandings, error: errorDriverStandings } = useDataFetchingService(driverStandingsEndpoint);
  const { data: constructorStandingsData, isLoading: isLoadingConstructorStandings, error: errorConstructorStandings } = useDataFetchingService(constructorStandingsEndpoint);
  const { data: nextRaceData, isLoading: isLoadingNextRace, error: errorNextRace} = useDataFetchingService(nextRaceEndpoint);
  const { data: lastRaceData, isLoading: isLoadingLastRace, error: errorLastRace} = useDataFetchingService(lastRaceEndpoint);
  const { data: scheduleData, isLoading: isLoadingSchedule, error: errorSchedule} = useDataFetchingService(scheduleEndpoint);


  return (
    <DataFetchingContext.Provider value={{ 
      driverStandingsData, 
      isLoadingDriverStandings, 
      errorDriverStandings, 
      constructorStandingsData, 
      isLoadingConstructorStandings, 
      errorConstructorStandings,
      nextRaceData,
      isLoadingNextRace,
      errorNextRace,
      lastRaceData,
      isLoadingLastRace,
      errorLastRace,
      scheduleData,
      isLoadingSchedule,
      errorSchedule }}>
      {children}
    </DataFetchingContext.Provider>
  );
};
