import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import KanbanCard from 'docs/components/card/kanban/KanbanCard';
import Prism from 'components/molecules/Prism';
import overShadow from '@mui-treasury/styles/shadow/over';
import softRiseShadow from '@mui-treasury/styles/shadow/softRise';
import bouncyShadow from '@mui-treasury/styles/shadow/bouncy';
import floatShadow from '@mui-treasury/styles/shadow/float';
import lightTopShadow from '@mui-treasury/styles/shadow/lightTop';
import fadedShadow from '@mui-treasury/styles/shadow/faded';

const useFadedShadowStyles = makeStyles(fadedShadow);
const useOverShadowStyles = makeStyles(overShadow);
const useSoftRiseShadowStyles = makeStyles(softRiseShadow);
const useBouncyShadowStyles = makeStyles(bouncyShadow);
const useFloatShadowStyles = makeStyles(floatShadow);
const useLightTopShadowStyles = makeStyles(lightTopShadow);

const useStyles = makeStyles(() => ({
  topic: {
    fontSize: 'calc(12px + 1.5vw)',
  },
  frame: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(245, 248, 250)',
    height: '100%',
  },
  radio: {
    alignSelf: 'center',
    marginLeft: -8,
    marginRight: 8,
  },
  code: {
    flex: 1,
    padding: '6px 12px !important',
    '& > *': {
      lineHeight: '36px',
    },
  },
}));

const StylingIsFun = () => {
  const [selectedClassName, setClassName] = React.useState('');
  const classes = useStyles();
  const shadows = [
    {
      code:
        'import { useFadedShadowStyles } from "@mui-treasury/styles/shadow";',
      className: useFadedShadowStyles().root,
    },
    {
      code:
        'import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow";',
      className: useBouncyShadowStyles().root,
    },
    {
      code:
        'import { useFloatShadowStyles } from "@mui-treasury/styles/shadow";',
      className: useFloatShadowStyles().root,
    },
    {
      code:
        'import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow";',
      className: useLightTopShadowStyles().root,
    },
    {
      code:
        'import { useOverShadowStyles } from "@mui-treasury/styles/shadow";',
      className: useOverShadowStyles().root,
    },
    {
      code:
        'import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow";',
      className: useSoftRiseShadowStyles().root,
    },
  ];
  return (
    <Container>
      <Box py={{ xs: '2rem', sm: '3.5rem' }}>
        <h2 className={classes.topic}>Styling is fun!</h2>
        <p>
          Styles must be dynamic and flexible, you must be able change it
          whenever you want!
        </p>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box className={classes.frame} minHeight={240}>
              <KanbanCard className={selectedClassName} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            {shadows.map(({ code, className }) => (
              <Box display={'flex'} key={code}>
                <Radio
                  className={classes.radio}
                  checked={selectedClassName === className}
                  onChange={() => setClassName(className)}
                />
                <Prism className={classes.code} code={code} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

StylingIsFun.propTypes = {};
StylingIsFun.defaultProps = {};

export default StylingIsFun;
