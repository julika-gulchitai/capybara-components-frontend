import { api } from '../configApi/api';

// Функція додавання даних про воду
export const requestAddWaterData = async (credentials) => {
  const { data } = await api.post('water', credentials);

  return data;
};
// Функція видалення даних про воду

export const requestDeleteWaterData = async (portionId) => {
  const { data } = await api.delete(`water/${portionId}`);

  return data;
};

// Функція редагування даних про воду
export const requestEditWaterData = async (portionId, credentials) => {
  const { data } = await api.put(`water/${portionId}`, credentials);
  return data;
};

// Функція запиту даних про воду за день

export const requestDayWaterData = async () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const { data } = await api.get('/water/today', {
    params: {
      date: formattedDate,
    },
  });

  return data;
};

// Функція запиту даних про воду за місяць
export const requestMonthWaterData = async (month, year) => {
  const { data } = await api.get(`water/month?month=${month}&year=${year}`);

  return data;
};

////Запити по воді(за день, за місяць, видалення нотаток за день)

// Функція отримання статистики про воду за місяць

export const getWaterStats = async (month, year) => {
  const { data } = await api.get(`/water/month?month=${month}&year=${year}`);
  return data;
};

// Функція отримання нотаток про воду за день

export const getWaterNotes = async () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const { data } = await api.get('/water/today', {
    params: {
      date: formattedDate,
    },
  });

  return data;
};
// Функція видалення нотатки про воду
export const deleteWaterNote = async (id) => {
  const { data } = await api.delete(`/water/${id}`);
  return data;
};
