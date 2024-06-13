import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { useEventFormData } from "./services/hooks";
import { AppScenesPaths } from "../../services/model/utils";
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

  const { eventFormText, eventValue, onChangeEvent, processEvent } =
    useEventFormData();

  const [isPeriodic, setIsPeriodic] = useState(false);

  const setEvent = useCallback(() => {
    processEvent();
    navigate(AppScenesPaths.eventCalendar);
  }, [navigate, processEvent]);

  const { FakeMainButton } = useMainButton({
    text: eventFormText.button,
    cb: setEvent,
  });

  return (
    <div className={styles.container}>
      <Typography variant="h5" gutterBottom>
        {eventFormText.header}
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
            //
            value={eventValue.title}
            onChange={(e) => {
              onChangeEvent("title", e.target.value);
            }}
            // {...getTextFieldProps("title")}
          />

          <TextFieldStyled
            label="Ссылка"
            variant="standard"
            //
            value={eventValue.link}
            onChange={(e) => {
              onChangeEvent("link", e.target.value);
            }}
            // {...getTextFieldProps("link")}
          />

          <AutocompleteStyled
            options={users}
            getOptionLabel={(option) => option.name}
            textFieldLabel="Участники"
            //
            onChange={(_, val) => {
              onChangeEvent(
                "participants",
                val.map((item) => item.id)
              );
            }}
            // {...getTextFieldProps("participants")}
          />

          <DatePickerStyled
            label="Дата"
            slotProps={{ textField: { variant: "standard" } }}
            //
            onChange={(e) => {
              onChangeEvent("date", e?.format("YYYY-MM-DD"));
            }}
            // {...getTextFieldProps("date")}
          />

          <TimePickerStyled
            label="Начало"
            slotProps={{ textField: { variant: "standard" } }}
            ampm={false}
            //
            onChange={(e) => {
              // console.log(e.)
              onChangeEvent("start", e?.format("HH:mm"));
            }}
          />

          <TimePickerStyled
            label="Конец"
            slotProps={{ textField: { variant: "standard" } }}
            ampm={false}
            //
            onChange={(e) => {
              onChangeEvent("end", e?.format("HH:mm"));
            }}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Периодическое"
              checked={isPeriodic}
              onChange={() => setIsPeriodic(!isPeriodic)}
            />
          </FormGroup>

          {isPeriodic && (
            <ToggleButtonGroupStyled
              options={toggleButtonOptions}
              value="once"
            />
          )}

          <TextFieldStyled label="Описание" variant="standard" multiline />
        </Box>
      </Card>

      <FakeMainButton />
    </div>
  );
};

export default EventForm;
