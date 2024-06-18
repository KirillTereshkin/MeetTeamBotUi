import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Card, Typography } from "@mui/material";

import { User } from "../../services/model/user";
import { formWrapper } from "./components/FormWrapper";
import { CheckboxStyled } from "../../components/Styled";
import { toggleButtonOptions } from "./services/constants";
import { AppScenesPaths } from "../../services/model/utils";
import { useGetUsersQuery } from "../../services/store/queries";
import { useMainButton } from "../../services/hooks/useMainButton";
import { useEventFormData } from "./services/hooks/useEventFormData";
import { ToggleButtonGroupStyled } from "../../components/ToggleButtonGroup";
import {
  TextFieldForm,
  DatePickerForm,
  TimePickerForm,
  AutocompleteForm,
} from "../../components/FormFields";

import styles from "./EventForm.module.scss";

const EventForm: FC = () => {
  const navigate = useNavigate();

  const { data: users } = useGetUsersQuery();

  const { eventFormText, onChangeEvent, processEvent } = useEventFormData();

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
          <TextFieldForm label="Наименование" name="title" />

          <TextFieldForm label="Ссылка" name="link" />

          <AutocompleteForm
            name="participants"
            options={users || []}
            getOptionLabel={(option) => option.name}
            getOptionKey={(option) => option.id}
            textFieldLabel="Участники"
          />

          <DatePickerForm label="Дата" name="date" disablePast />

          <TimePickerForm label="Начало" name="start" />

          <TimePickerForm label="Конец" name="end" />

          <CheckboxStyled
            label="Периодическое"
            checked={isPeriodic}
            onChange={() => setIsPeriodic(!isPeriodic)}
          />

          {isPeriodic && (
            <ToggleButtonGroupStyled
              options={toggleButtonOptions}
              value="once"
            />
          )}

          <TextFieldForm name="description" label="Описание" multiline />
        </Box>
      </Card>

      <FakeMainButton />
    </div>
  );
};

export default formWrapper(EventForm);
