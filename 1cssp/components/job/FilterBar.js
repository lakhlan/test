import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type FilterBarProps = {
  filters: string[];
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpansion = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const handleFilterToggle = useCallback(
    (filter: string) => {
      const updatedFilters = selectedFilters.includes(filter)
        ? selectedFilters.filter((f) => f !== filter)
        : [...selectedFilters, filter];
      onFilterChange(updatedFilters);
    },
    [selectedFilters, onFilterChange]
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.expandButton} onPress={toggleExpansion}>
        <Text style={styles.expandButtonText}>
          {expanded ? 'Collapse Filters' : 'Expand Filters'}
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Filters:</Text>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilters.includes(filter)
                  ? styles.filterButtonActive
                  : null,
              ]}
              onPress={() => handleFilterToggle(filter)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedFilters.includes(filter)
                    ? styles.filterButtonTextActive
                    : null,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
                  selectedFilters.includes(filter)
                    ? styles.filterButtonTextActive
                    : null,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
                  selectedFilters.includes(filter)
                    ? styles.filterButtonTextActive
                    : null,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  expandButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  expandButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
    marginRight: 10,
  },
  filterButtonActive: {
    backgroundColor: 'blue',
  },
  filterButtonText: {
    fontSize: 14,
  },
  filterButtonTextActive: {
    color: 'white',
  },
});

export default FilterBar;
