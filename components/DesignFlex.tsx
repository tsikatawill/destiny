import Image from 'next/image';
import { styled } from '../stitches.config';
import { StyledButton } from './Hero';

const StyledDesignFlex = styled('div', {
  display: 'grid',
  alignItems: 'center',
  gap: '2rem',
  gridTemplateColumns: '1fr',

  '& .left': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'center',
  },

  '& .right': {
    display: 'block',
  },

  '& h2': {
    textTransform: 'capitalize',
  },

  '& button': {
    width: 'fit-content',
    margin: 'auto',
  },

  '& ul': {
    listStyle: 'none',
  },

  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',

    '& .left': {
      textAlign: 'left',
    },

    '& button': {
      margin: 0,
    },
  },

  variants: {
    order: {
      reversed: {
        '& .right': {
          gridColumn: '1',
          gridRow: '2',
        },

        '& .left': {
          gridColumn: '1',
        },

        '@md': {
          '& .right': {
            gridColumn: '1',
            gridRow: 1,
          },

          '& .left': {
            gridRow: 1,
            gridColumn: '2',
          },
        },
      },
    },
  },
});

type Props = {
  image: string;
  title: string;
  reasons: string[];
  btnText: string;
  order?: 'reversed';
  description: string;
};

export default function DesignFlex({ image = '/laptop.png', title, reasons, description, btnText, order }: Props) {
  return (
    <StyledDesignFlex order={order}>
      <div className="left">
        <h2>{title}</h2>

        <p>{description}</p>

        <ul>
          {reasons.map((item, index) => (
            <li key={index}>
              <span>&#45; </span>
              {item}
            </li>
          ))}
        </ul>

        <StyledButton type="primary">{btnText}</StyledButton>
      </div>
      <div className="right">
        <Image src={image} alt={title} width="3" height="2" layout="responsive" />
      </div>
    </StyledDesignFlex>
  );
}
