import {
  blue,
  cyan,
  generate,
  green,
  presetPalettes,
  purple,
  red,
} from '@ant-design/colors';
import type { ColorPickerProps, GetProp } from 'antd';
import { Col, ColorPicker, Divider, Row, Space, theme } from 'antd';
import React, { useEffect, useState } from 'react';

import { useStore } from '@/store';

type Color = Extract<
  GetProp<ColorPickerProps, 'value'>,
  string | { cleared: any }
>;
type Format = GetProp<ColorPickerProps, 'format'>;
type Presets = Required<ColorPickerProps>['presets'][number];

const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
  }));

const AppearanceColor: React.FC = () => {
  const color = useStore((state) => state.colorSlice.color);
  const setColor = useStore((state) => state.colorSlice.setColor);
  const [colorHex, setColorHex] = useState<Color>(color);
  const [formatHex, setFormatHex] = useState<Format | undefined>('hex');

  console.log(color);

  const hexString = React.useMemo<string>(
    () => (typeof colorHex === 'string' ? colorHex : colorHex?.toHexString()),
    [colorHex],
  );

  useEffect(() => {
    setColor(hexString);
  }, [hexString, setColor]);

  const { token } = theme.useToken();

  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
    cyan,
    purple,
    blue,
  });

  const customPanelRender: ColorPickerProps['panelRender'] = (
    _,
    { components: { Picker, Presets } },
  ) => (
    <Row justify="space-between" wrap={false}>
      <Col span={12}>
        <Presets />
      </Col>
      <Divider type="vertical" style={{ height: 'auto' }} />
      <Col flex="auto">
        <Picker />
      </Col>
    </Row>
  );

  return (
    <Space>
      <ColorPicker
        format={formatHex}
        value={colorHex}
        onChange={setColorHex}
        onFormatChange={setFormatHex}
        presets={presets} // Add the presets here if needed
        panelRender={customPanelRender} // Use the custom panel render if needed
      />
      <span>{hexString}</span>
    </Space>
  );
};

export default AppearanceColor;
