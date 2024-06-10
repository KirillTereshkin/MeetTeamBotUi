import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Autocomplete, Box, Card, Typography } from "@mui/material";

import { AppScenesPaths } from "../../services/model";
import { useMainButton } from "../../services/hooks/useMainButton";
import { TextFieldStyled } from "../../components/TextFieldStyled";
import { DatePickerStyled } from "../../components/DatePickerStyled";
import { TimePickerStyled } from "../../components/TimePickerStyled";

import styles from "./CreateEvent.module.scss";
import { AutocompleteStyled } from "../../components/AutocompleteStyled";

const users = [
  {
    id: 1,
    name: "Кирилл",
    tg: "@Kirill",
  },

  {
    id: 2,
    name: "Андрей",
    tg: "@Andrey",
  },

  {
    id: 3,
    name: "Антон",
    tg: "@Anton",
  },

  {
    id: 4,
    name: "Валера",
    tg: "@Valera",
  },

  {
    id: 5,
    name: "Вика",
    tg: "@Vika",
  },

  {
    id: 6,
    name: "Kolya",
    tg: "@Kolya",
  },
];

const CreateEvent: FC = () => {
  const navigate = useNavigate();

  const createEvent = useCallback(() => {
    navigate(AppScenesPaths.eventCalendar);
  }, [navigate]);

  const { FakeMainButton } = useMainButton({
    text: "Cоздать событие",
    cb: createEvent,
  });

  return (
    <div className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Создать событие
      </Typography>

      <Card variant="outlined" className={styles.card}>
        <Box
          sx={{
            m: 1,
            p: 1,
            gap: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextFieldStyled label="Наименование" variant="standard" />

          <TextFieldStyled label="Ссылка" variant="standard" />

          <AutocompleteStyled
            options={users}
            getOptionLabel={(option) => option.name}
            textFieldLabel="Участники"
          />

          <DatePickerStyled
            label="Дата"
            slotProps={{ textField: { variant: "standard" } }}
          />

          <TimePickerStyled
            label="Начало"
            slotProps={{ textField: { variant: "standard" } }}
            ampm={false}
          />

          <TimePickerStyled
            label="Конец"
            slotProps={{ textField: { variant: "standard" } }}
            ampm={false}
          />

          <TextFieldStyled
            label="Описание"
            variant="standard"
            multiline
            rows={3}
          />
        </Box>
      </Card>

      <FakeMainButton />
    </div>
  );
};

export default CreateEvent;

// const a = {
//   accent_text_color: "#6ab2f2",
//   bg_color: "#17212b",
//   button_color: "#5288c1",
//   button_text_color: "#ffffff",
//   destructive_text_color: "#ec3942",
//   header_bg_color: "#17212b",
//   hint_color: "#708499",
//   link_color: "#6ab3f3",
//   secondary_bg_color: "#232e3c",
//   section_bg_color: "#17212b",
//   section_header_text_color: "#6ab3f3",
//   subtitle_text_color: "#708499",
//   text_color: "#f5f5f5",
// };

// ssh -p 2222 -R b47a85f4-3696-42d2-be5f-c349be9278d3:80:192.168.1.123:5173 devhook.ru
// https://b47a85f4-3696-42d2-be5f-c349be9278d3.devhook.ru/
