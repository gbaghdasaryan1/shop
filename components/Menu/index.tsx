import { useState } from 'react';
import { categoryAPI } from '../../redux/services/CategoryService';
import classes from "./Menu.module.scss";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { CategoryFirstLevelType, NestProps } from '../../common/interfaces';
import axios from 'axios';
import { API } from '../../Helpers/api';
import Second from './Levels/Second';
import { MenuProps } from './Menu.props';
import { useRouter } from 'next/router';



const Menu = ({ onClose, open }: MenuProps) => {

  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState<NestProps[]>([]);
  const [show, setShow] = useState(false);
  const [third, setThird] = useState(true);
  const { data } = categoryAPI.useFetchAllUsersQuery('');
  const router = useRouter();

  const onMouseEnterItem = async (item: CategoryFirstLevelType, title: string) => {
    // setThird(false);
    // const response = await axios(API.configuration.getSubCategories + "?categoryId=" + item.id);
    // const data = response.data;
    // setTitle(title);
    // setSelected(data);
    // if (item.categories) {
    //   setShow(true);
    // } else {
    //   setShow(false);
    // }
  };

  const onCategoryClick = (id: string, title: string) => {
    document.body.style.overflow = 'unset';
    router.push({
      pathname: `/category/${id}`,
      query: {
        title
      }
    });
  };


  return (
    <>
      {open && <div className={classes.Wrapper} onClick={(e) => {
        e.stopPropagation();
        onClose();
        setShow(false);
        document.body.style.overflow = 'unset';
      }}>
        <ul className={classes.Menu} onClick={(e) => e.stopPropagation()}>
          <h3>Menu</h3>
          {
            data?.map((item) => {
              return (
                <li key={item.id}
                  onMouseEnter={() => onMouseEnterItem(item, item.categories[0].title)}
                  onClick={() => onCategoryClick(item.id, item.categories[0].title)}>
                  {item.categories[0].title}
                  <ArrowRightIcon />
                </li>
              );
            })
          }
          {show && <Second data={selected} title={title} third={third} setThird={() => setThird(true)} />}
        </ul>
      </div>}
    </>
  );
};

export default Menu;
