import { FC, useCallback, useEffect, useMemo } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import { TG } from "../../services/constants";

import styles from "./CreateEvent.module.scss";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { AppScenesPaths } from "../../services/model";

const CreateEvent: FC = () => {
  const navigate = useNavigate();

  const createEvent = useCallback(() => {
    navigate(AppScenesPaths.eventCalendar);
  }, [navigate]);

  useEffect(() => {
    TG.MainButton.text = "Cоздать событие";
    TG.MainButton.onClick(createEvent);
    TG.MainButton.show();
  }, [createEvent]);

  return (
    <Box sx={{ m: 1, p: 1, gap: 2, display: "flex", flexDirection: "column" }}>
      <Button onClick={createEvent}>FAKE Cоздать событие</Button>

      <Typography variant="h4" gutterBottom>
        Создать событие
      </Typography>

      <TextField label="Наименование" variant="standard" />

      <TextField label="Ссылка" variant="standard" />

      <DatePicker
        label="Дата"
        slotProps={{ textField: { variant: "standard" } }}
      />

      <TimePicker
        label="Начало"
        slotProps={{ textField: { variant: "standard" } }}
        ampm={false}
      />

      <TimePicker
        label="Конец"
        slotProps={{ textField: { variant: "standard" } }}
        ampm={false}
      />

      <TextField label="Описание" variant="standard" multiline />
    </Box>
  );
};

export default CreateEvent;
