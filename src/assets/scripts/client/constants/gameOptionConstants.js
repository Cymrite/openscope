/* eslint-disable max-len, import/prefer-default-export */
/**
 * Name enumeration of available game options
 *
 * @property GAME_OPTION_NAMES
 * @type {Object}
 * @final
 */
export const GAME_OPTION_NAMES = {
    CONTROL_METHOD: 'controlMethod',
    PTL_LENGTH: 'ptlLength',
    DRAW_PROJECTED_PATHS: 'drawProjectedPaths',
    SOFT_CEILING: 'softCeiling',
    INCLUDE_WIP_AIRPORTS: 'includeWipAirports'
};

/**
 * User options
 *
 * These options are presented in a modal and are stored in localStorage
 *
 * @property GAME_OPTION_VALUES
 * @type {array<object>}
 * @final
 */
export const GAME_OPTION_VALUES = [
    {
        name: GAME_OPTION_NAMES.CONTROL_METHOD,
        defaultValue: 'classic',
        description: 'Control Method',
        type: 'select',
        data: [
            ['Classic', 'classic'],
            ['Arrow Keys', 'arrows']
        ]
    },
    {
        name: GAME_OPTION_NAMES.PTL_LENGTH,
        defaultValue: '1',
        description: 'Projected Track Line (PTL) Length',
        type: 'select',
        data: [
            ['30sec', '0.5'],
            ['1min', '1'],
            ['2min', '2']
        ]
    },
    {
        name: GAME_OPTION_NAMES.DRAW_PROJECTED_PATHS,
        defaultValue: 'selected',
        description: 'Draw aircraft projected path',
        type: 'select',
        data: [
            ['Always', 'always'],
            ['Selected', 'selected'],
            ['Never', 'never']
        ]
    },
    {
        name: GAME_OPTION_NAMES.SOFT_CEILING,
        defaultValue: 'yes',
        description: 'Allow departures via climb',
        help: 'Normally aircraft departs the airspace by flying beyond the horizontal bounds.  If set to yes, aircraft may also depart the airspace by climbing above it.',
        type: 'select',
        data: [
            ['Yes', 'yes'],
            ['No', 'no']
        ]
    },
    {
        name: GAME_OPTION_NAMES.INCLUDE_WIP_AIRPORTS,
        defaultValue: 'no',
        description: 'Include WIP Airports',
        help: 'Will include all available airports including those marked as Work In Progress.',
        type: 'select',
        data: [
            ['Yes', 'yes'],
            ['No', 'no']
        ]

    }
];
