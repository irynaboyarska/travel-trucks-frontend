import type { CamperFiltersParams } from '@/lib/api';
import { CiMap } from 'react-icons/ci';

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
    <aside>
      <div>
        <label htmlFor="location">Location</label>
        <div>
          <CiMap />
          <input
            id="location"
            type="text"
            placeholder="City"
            value={filters.location ?? ''}
            onChange={event => handleChange('location', event.target.value)}
          />
        </div>
      </div>
      <h3>Filters</h3>
      <fieldset>
        <legend>Camper form</legend>
        <label>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'alcove'}
            onChange={() => handleChange('form', 'alcove')}
          />
          Alcove
        </label>
        <label>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'panel_van'}
            onChange={() => handleChange('form', 'panel_van')}
          />
          Panel Van
        </label>
        <label>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'integrated'}
            onChange={() => handleChange('form', 'integrated')}
          />
          Integrated
        </label>
        <label>
          <input
            type="radio"
            name="form"
            checked={filters.form === 'semi_integrated'}
            onChange={() => handleChange('form', 'semi_integrated')}
          />
          Semi Integrated
        </label>
      </fieldset>
      <fieldset>
        <legend>Engine</legend>
        <label>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'diesel'}
            onChange={() => handleChange('engine', 'diesel')}
          />
          Diesel
        </label>
        <label>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'petrol'}
            onChange={() => handleChange('engine', 'petrol')}
          />
          Petrol
        </label>
        <label>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'hybrid'}
            onChange={() => handleChange('engine', 'hybrid')}
          />
          Hybrid
        </label>
        <label>
          <input
            type="radio"
            name="engine"
            checked={filters.engine === 'electric'}
            onChange={() => handleChange('engine', 'electric')}
          />
          Electric
        </label>
      </fieldset>
      <fieldset>
        <legend>Transmission</legend>
        <label>
          <input
            type="radio"
            name="transmission"
            checked={filters.transmission === 'automatic'}
            onChange={() => handleChange('transmission', 'automatic')}
          />
          Automatic
        </label>
        <label>
          <input
            type="radio"
            name="transmission"
            checked={filters.transmission === 'manual'}
            onChange={() => handleChange('transmission', 'manual')}
          />
          Manual
        </label>
      </fieldset>
      <div>
        <button type="button" onClick={onSearch}>
          Search
        </button>
        <button type="button" onClick={onClear}>
          Clear filters
        </button>
      </div>
    </aside>
  );
};
export default CamperFilters;
