import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { AppScenesPaths } from "../../services/model";
import { toggleButtonOptions, users } from "./services/constants";
import { useMainButton } from "../../services/hooks/useMainButton";
import { TextFieldStyled } from "../../components/TextFieldStyled";
import { DatePickerStyled } from "../../components/DatePickerStyled";
import { TimePickerStyled } from "../../components/TimePickerStyled";
import { AutocompleteStyled } from "../../components/AutocompleteStyled";
import { ToggleButtonGroupStyled } from "../../components/ToggleButtonGroup";

import styles from "./EventForm.module.scss";

const EventForm: FC = () => {
  const navigate = useNavigate();

  // const { getTextFieldProps } = useValidation();

  const setEvent = useCallback(() => {
    navigate(AppScenesPaths.eventCalendar);
  }, [navigate]);

  const { FakeMainButton } = useMainButton({
    text: "Cоздать событие",
    cb: setEvent,
  });

  return (
    <div className={styles.container}>
      <Typography variant="h5" gutterBottom>
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
          <TextFieldStyled
            label="Наименование"
            variant="standard"
            // {...getTextFieldProps("title")}
          />

          <TextFieldStyled
            label="Ссылка"
            variant="standard"
            // {...getTextFieldProps("link")}
          />

          <AutocompleteStyled
            options={users}
            getOptionLabel={(option) => option.name}
            textFieldLabel="Участники"
            // {...getTextFieldProps("participants")}
          />

          <DatePickerStyled
            label="Дата"
            slotProps={{ textField: { variant: "standard" } }}
            // {...getTextFieldProps("date")}
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

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Периодическое"
            />
          </FormGroup>

          <ToggleButtonGroupStyled options={toggleButtonOptions} value="once" />

          <TextFieldStyled label="Описание" variant="standard" multiline />
        </Box>
      </Card>

      <FakeMainButton />
    </div>
  );
};

export default EventForm;
