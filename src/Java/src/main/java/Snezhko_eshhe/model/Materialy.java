package Snezhko_eshhe.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhko_eshhe.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Материалы
 */
@Entity(name = "IISSnezhko_eshheМатериалы")
@Table(schema = "public", name = "Материалы")
public class Materialy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "КодМатериала")
    private Integer кодматериала;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Proizvoditel")
    @Convert("Proizvoditel")
    @Column(name = "Производитель", length = 16, unique = true, nullable = false)
    private UUID _proizvoditelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Proizvoditel", insertable = false, updatable = false)
    private Proizvoditel proizvoditel;


    public Materialy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Integer getКодМатериала() {
      return кодматериала;
    }

    public void setКодМатериала(Integer кодматериала) {
      this.кодматериала = кодматериала;
    }


}