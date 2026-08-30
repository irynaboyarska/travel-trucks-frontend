import type { CamperFiltersParams } from '@/lib/api';
import { CiMap } from 'react-icons/ci';
import css from './CamperFilters.module.css';
import { IoIosClose } from 'react-icons/io';

type CamperFiltersProps = {
  filters: CamperFiltersParams;
  onChange: (filters: CamperFiltersParams) => void;
  onSearch: () => void;
  onClear: () => void;
};

const CamperFilters = ({ filters, onChange, onSearch, onClear }: CamperFiltersProps) => {
  const handleChange = (key: keyof CamperFiltersParams, value: string) => {
    onChange({ ...filters, [key]: value || undefined });
  };

  return (
    <aside className={css.filters}>
      <div className={css.location}>
        <label className={css.locationLabel} htmlFor="location">
          Location
        </label>
        <div className={css.locationInput}>
          <CiMap className={css.locationIcon} />
          <input
            className={css.input}
            id="location"
            type="text"
            placeholder="City"
            value={filters.location ?? ''}
            onChange={event => handleChange('location', event.target.value)}
          />
        </div>
      </div>
      <h3 className={css.title}>Filters</h3>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Camper form</legend>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            checked={filters.form === 'alcove'}
            onChange={() => handleChange('form', 'alcove')}
          />
          Alcove
        </label>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            checked={filters.form === 'panel_van'}
            onChange={() => handleChange('form', 'panel_van')}
          />
          Panel Van
        </label>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            checked={filters.form === 'integrated'}
            onChange={() => handleChange('form', 'integrated')}
          />
          Integrated
        </label>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            checked={filters.form === 'semi_integrated'}
            onChange={() => handleChange('form', 'semi_integrated')}
          />
          Semi Integrated
        </label>
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Engine</legend>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            checked={filters.engine === 'diesel'}
            onChange={() => handleChange('engine', 'diesel')}
          />
          Diesel
        </label>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            checked={filters.engine === 'petrol'}
            onChange={() => handleChange('engine', 'petrol')}
          />
          Petrol
        </label>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            checked={filters.engine === 'hybrid'}
            onChange={() => handleChange('engine', 'hybrid')}
          />
          Hybrid
        </label>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            checked={filters.engine === 'electric'}
            onChange={() => handleChange('engine', 'electric')}
          />
          Electric
        </label>
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Transmission</legend>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="transmission"
            checked={filters.transmission === 'automatic'}
            onChange={() => handleChange('transmission', 'automatic')}
          />
          Automatic
        </label>
        <label className={css.option}>
          <input
            className={css.radio}
            type="radio"
            name="transmission"
            checked={filters.transmission === 'manual'}
            onChange={() => handleChange('transmission', 'manual')}
          />
          Manual
        </label>
      </fieldset>
      <div className={css.actions}>
        <button className={css.searchButton} type="button" onClick={onSearch}>
          Search
        </button>
        <button className={css.clearButton} type="button" onClick={onClear}>
          <IoIosClose size={24} />
          Clear filters
        </button>
      </div>
    </aside>
  );
};

export default CamperFilters;
