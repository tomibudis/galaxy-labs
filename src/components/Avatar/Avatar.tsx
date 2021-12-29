import React, { useCallback, useMemo } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { AvatarProps } from '#interface/index';
import { TYPE_AVATAR, SIZE } from '#constants/index';
import Icon from '../Icon';

import styles from './styles.module.scss';

const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  const getAbrebativeName = useCallback(() => {
    if (!props.name) return null;
    const maxChar = 2;
    const sliceName = props.name
      .split(' ')
      .map((splitName, index) => {
        if (index + 1 > maxChar) return null;
        return splitName.slice(0, 1);
      })
      .join('');
    return sliceName;
  }, [props.name]);

  const renderIcon = useCallback(() => {
    if (!props.icon) return null;
    return <Icon name={props.icon} />;
  }, [props.icon]);

  const stylesImage = useMemo(() => {
    if (!props.img) return {};
    return { backgroundImage: `url(${props.img})` };
  }, [props.img]);

  const renderName = useMemo(() => {
    if (props.img) return null;
    return props.name ? getAbrebativeName() : renderIcon();
  }, [props.img, props.name, getAbrebativeName, renderIcon]);

  return (
    <div
      className={cx(
        { [styles.avatarRectangle]: props.type === TYPE_AVATAR.RECTANGLE },
        { [styles.avatarCircle]: props.type === TYPE_AVATAR.CIRCLE },
        { [styles.sm]: props.size === SIZE.SM },
        { [styles.md]: props.size === SIZE.MD },
        { [styles.lg]: props.size === SIZE.LG },
        props.className
      )}
      style={stylesImage}
    >
      {renderName}
    </div>
  );
};

Avatar.propTypes = {
  /** Set size of avatar with 3 variant */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Set name of avatar */
  name: PropTypes.string,
  /** Set name of icon if we want to using icon instead of alphabetics */
  icon: PropTypes.string,
  /** Set type of box avatar */
  type: PropTypes.oneOf(['rectangle', 'circle']),
};

Avatar.defaultProps = {
  type: 'circle',
  size: 'sm',
};

export default Avatar;
